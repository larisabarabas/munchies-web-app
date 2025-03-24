import { defineQuery } from "next-sanity";

export const SPLASH_SCREEN_STATIC_CONTENT_QUERY = defineQuery(
    `*[_type == "content" && name == "Splash Screen"]`
)

export const FILTER_STATIC_CONTENT_QUERY = defineQuery(
    `*[_type == "content" && name == "Filter Side Bar"]`
)