# NOTES:

## NEXT JS

Next.js is a react framework for building full-stack web applications.
Its not feasible to create a fully-featured application ready for production.
React is a library for building user interfaces.
You need to make decisions about other features sucj as routing, data fetching and more.

Next.js uses react for building user interfaces.
It provides additional features that enable you to build production-ready applications.
These features including routing, optimized rendering, data fetching, bundling, compiling and more.
We don't need to install additional packages as Next provided everything we need.
Conventions should be followed to implement the above features.

## USAGE:

1. ROUTING - For routing in react we need to make use of third party packages, but Next.js simplifies by providing file based routing by creating files and routing is automatically generated or taken care.
2. API ROUTES - Build both Client and server side components and API's within the same application for seamless integration between Backend and frontend.
3. Rendering - Supports both client and server side rendering. Improved performance and SSO when implemented properly.
4. Data fetching - Streamline data fetching.
5. Styling - Flexible with styling approaches support css modules.
6. Optimization - Out of box optimatization for images, fonts , scripts enhancing application performance.
7. Dev and prod build system - Focus on writing code instead of dealing with configurations.

## SERVER SIDE COMPONENTS AND CLIENT SIDE COMPONENTS:

1. By default all components in next js are server side components.
2. To define a client side component(which is the traditional react component) we have to declare 'use client' at the top of the file.
3. Client side components cannot function like server side components and won't act and display in route.
4. Server side components cannot make use of functions that client side component provides like using hooks.

## ROUTING:

1. File based routing in Next.js.
2. Define a folder called about and within that declard page.tsx ( This convention needs to be followed).
3. Navigate to localhost:3000/about. The component defined within about/page.tsx get rendered.

### Conventions:

1. All routes must live inside app folder with src directory.
2. Route files must be named either page.js or page.tsx.
3. Each folder represents a segment of the URL path.
4. Routes are directly tied to the folder name of directory.

## NESTED ROUTING:

1. Define a folder called blog and within that declard page.tsx.
2. Create 2 separate folders within blog folder named first and second respectively.
3. Create page.tsx within first and second folder.
4. Now navigate for localhost:3000/blog, localhost:3000/blog/first and localhost:3000/blog/second.

## DYNAMIC ROUTING:

1. Define a folder called products and within that declard page.tsx.
2. Add following contents within.

   ```
   <>
    <h1>Product Lists</h1>
    <h2> Product 1</h2>
    <h2> Product 2</h2>
    <h2> Product 3</h2>
   </>

   ```

3. Create a new folder within products with the name wrapped as [productId] and within it define page.tsx
4. Add following content

   ```import React from 'react';

      const ProductDetails = ({ params }: { params: { productId: string } }) => {
        return (
          <>
            <h1>Details about product {params.productId}</h1>
          </>
        );
      };

      export default ProductDetails;
   ```

5. Now navigate to localhost:3000/products, localhost:3000/products/1 and localhost:3000/1000.

## NESTED DYNAMIC ROUTE:

Please check docs and docs1 folder to completely understand it as it is too verbose to describe here.

## CATCH ALL SEGMENTS:

Use [...slug] or [[...slug]].
Slug is an array with queryId as params. Eg [1, 101] // feature/1/concept/101
The essential difference between [...slug] and [[...slug]] is with [[..slug]] paves a way for route /docs to render and return the last statement. Navigate to localhost:3000/docs and localhost:3000/docs1 to know the difference.

Question: But having a page.tsx in docs should behave same right?
If UI is to be consistent or same then we can have page.tsx in docs folder or when page UI changes based on url we keep it [[...slug]] folder.

## PRIVATE ROUTE:

1. \_nameoffolder indicated private route which next won't serve. (Check \_lib folder for this)
2. So \_ at start of folder name serves to create private route making it reserve.
3. To have a folder that starts with an '\_' use %5F instead. (Check %5Flib folder for this)

Advantages:

1. Keep UI logic separate from routing logic.
2. Having a consistent way to organize internal files in our project.
3. Easier grouping.
4. Avoiding potential naming conflict with future Next.js files naming convension.

## ROUTE GROUPS:

1. Wrapping a folder name with () informs next js to tried the route group to exclude from routes url path.
2. Name will be omitted from url path.
3. Route groups helps us to organize our code better.
4. Nesting is possible in route groups. Route groups can be nested within each other.

## LAYOUTS:

1. A page is UI that is unique to a route.
2. A layout is UI that is shared between multiple pages in the app.
3. You can define a layout by default exporting a react component from layout.js or layout.tsx file. This is the mandatory layout.
4. The component as in 3 should accept a children prop that will be populated with a child page during rendering.
5. Check layout.tsx file.

## NESTED LAYOUTS:

1. Layouts can be nested. It could be specific to product details page. You can define it within the [productId] folder.
2. Check layout.tsx in products/[productId] folder.
3. Navigate to localhost:3000/products/100 and check it out.

## ROUTE GROUPS LAYOUT:

1. Can apply layouts only to specific components within a route group.
2. Create a new folder within the (auth) called (with-layout) and add the layout.tsx with contents copied from other layout.tsx from products folder.
3. Add the register and login folder to this with-layout folder and navigate to localhost:3000/register and localhost:3000/login to see the layout being applied with contents.
4. localhost:3000/forgot-password won't have the changes for local layout as it falls outside the directory of (with-layout)

## MULTIPLE ROOT LAYOUTS:

Check video.

### Not found page

1. Generic not found page can be used by creating a file in app. File should be named not-found as per convension.
2. Not found component can be imported using

   `import { notFound } from 'next/navigation';`

   and calling

   `notFound();`

3. Each route can have a specific not-found page, so when route doesn't match the not-found within that route is rendered instead of parent one in app folder.
4. NotFound component does not accept any props.

Question: So what about if we need to show custom messages?

`import {usePathname} from "next/navigation";`

## File colocation:

Keeping UI or components files separate in a component folder and include using

`import BarChart from '@/components/barChart';`

Or Make use of Private routes.

## ROUTING METADATA:

1. The metadata API in Next.js is a powerfule feature that lets us define metadata for each page.
2. Metadata ensures our content looks great when its shared or indexed by search engines.
3. Two ways to handle metadata in layout.tsx or page.tsx.

Convensions:

1. Both layout.tsx and page.tsx can export metadata. Layout metadata applies to all its pages, while page metadat is specific to that page.
2. Metadata follows a top-down order, starting from the root level.
3. When metadata exists in multiple places along a route, they merge together, with page metadata overriding layout metadata for matching properties.
4. We cannot use of a metadata object and a generateMetadata within a same componen/Functions. Its either or.
5. Will not work is use client components.

Title for routing metadata are of 2 types. One is string like "About me" or an object. Check the blog component and root layout

## LINK COMPONENT NAVIGATION:

1.  Up until now we used to manipulate the url in browser to view content, but actually what about navigation in when a link is clicked(actual usage in world apps). Here comes the Link navigation.
2.  For client side navigation, Next.js gives `<Link>` component.
3.  The `<Link>` component extends HTML's `<a>` (anchor) element, and its primary way to navigate between routes in Next.js.
4.  To use import from `"next/link"`.

         <Link href='/blog'>Blog</Link>

## PARAMS and SEARCH PARAMS

For a given URL,

1. `params` is a promise that resolves to an object containing the dynamic route parameters(Eg id)
2. `searchParams` is a promise that resolved to an object containing the query parameters(like filters and sorting)
3. While page.tsx has access to both params and searchParams, layout.tsx has access to only params.

Async/await support is available for only server components and not the client components.
For accessing params and searchParams in client components, we will need to make use of `use` hook in react.
Check the implementation in articles/
