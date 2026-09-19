import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { revalidatePrismicPages } from "@prismicio/next";

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, unknown> | null = null;
    try {
      body = await request.json();
    } catch {
      body = null;
    }

    const searchParams = request.nextUrl.searchParams;
    const secret =
      (body?.secret as string | undefined) ||
      searchParams.get("secret") ||
      request.headers.get("x-prismic-webhook-secret");

    const expectedSecret = process.env.PRISMIC_WEBHOOK_SECRET;

    // Verify secret if PRISMIC_WEBHOOK_SECRET is configured
    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json(
        { message: "Invalid secret token", revalidated: false },
        { status: 401 },
      );
    }

    // Handle Prismic webhook test trigger
    if (body?.type === "test-trigger") {
      return NextResponse.json({
        message: "Prismic test webhook trigger received successfully",
        revalidated: true,
        now: Date.now(),
      });
    }

    // 1. Immediately revalidate the global 'prismic' cache tag
    revalidateTag("prismic", { expire: 0 });

    // 2. Revalidate specific document IDs if sent in Prismic payload
    const documents = Array.isArray(body?.documents)
      ? (body.documents as string[])
      : [];

    if (documents.length > 0) {
      try {
        revalidatePrismicPages(documents);
      } catch (err) {
        console.warn("revalidatePrismicPages warning:", err);
      }

      for (const id of documents) {
        revalidateTag(`prismic/${id}`, { expire: 0 });
      }
    }

    // 3. Revalidate category specific tags
    revalidateTag("services", { expire: 0 });
    revalidateTag("projects", { expire: 0 });
    revalidateTag("blog_posts", { expire: 0 });

    // 4. Revalidate all page routes and layouts
    revalidatePath("/", "layout");
    revalidatePath("/blog", "page");
    revalidatePath("/services", "page");
    revalidatePath("/projects", "page");
    revalidatePath("/sitemap.xml");

    return NextResponse.json({
      revalidated: true,
      message: "Content revalidation successfully completed",
      documents,
      now: Date.now(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      {
        message: "Error during revalidation",
        error: error instanceof Error ? error.message : "Unknown error",
        revalidated: false,
      },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const secret = searchParams.get("secret");
  const expectedSecret = process.env.PRISMIC_WEBHOOK_SECRET;

  if (expectedSecret && secret !== expectedSecret) {
    return NextResponse.json(
      { message: "Invalid secret token", revalidated: false },
      { status: 401 },
    );
  }

  revalidateTag("prismic", { expire: 0 });
  revalidateTag("services", { expire: 0 });
  revalidateTag("projects", { expire: 0 });
  revalidateTag("blog_posts", { expire: 0 });
  revalidatePath("/", "layout");
  revalidatePath("/blog", "page");
  revalidatePath("/services", "page");
  revalidatePath("/projects", "page");
  revalidatePath("/sitemap.xml");

  return NextResponse.json({
    revalidated: true,
    message: "Manual revalidation triggered successfully",
    now: Date.now(),
  });
}