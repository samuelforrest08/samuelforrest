"use client";

import Link from "next/link";
import useSWR from "swr";
import type { Post } from "./get-posts";

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function HomePostList({ posts: initialPosts }: { posts: Post[] }) {
  const { data: posts } = useSWR("/api/posts", fetcher, {
    fallbackData: initialPosts,
  });

  return (
    <ul className="mt-8">
      {posts.map((post: Post) => (
        <li key={post.id}>
          <Link
            href={`/${new Date(post.date).getFullYear()}/${post.id}`}
            className="group flex items-baseline gap-6 py-3"
          >
            <span className="shrink-0 text-neutral-500 text-sm w-32">
              {formatDate(post.date)}
            </span>
            <span className="text-neutral-200 group-hover:text-white transition-colors">
              {post.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
