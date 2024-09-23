"use client";

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="text-red-900 bg-red-100 m-10 p-10 mt-10 rounded-md ">
          <h1 className="font-semibold"> Something went wrong! </h1>
          <br />
          <br />
          Try to add &quot;en&quot; in the beginning of the path. For example:
          arbabmustafa.com
        </div>
      </body>
    </html>
  );
}
