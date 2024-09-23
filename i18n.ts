import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config

export default getRequestConfig(async () => {
  // Validate that the incoming `locale` parameter is valid
  return {
    messages: (await import(`./messages/en.json`)).default,
  };
});
