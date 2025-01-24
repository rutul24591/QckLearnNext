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

## NAVIGATING PROGRAMATICALLY

In case consider a marketplace, where user places an order and post that we want to redirect the user to home page or as matter of fact any other route in application, we can make use of useRouter or redirect.

         import {useRouter, redirect} from "next/navigation";

         const router = useRouter();

         /** Redirect to home page */
         router.push('/');

         /** Go back in history */
         router.back();

         /** Go forward in history */
         router.forward();

         /** To replace instead of adding entry to history stack*/
         router.replace('/');

         /** We can also use redirect instead of useRouter. Check for example in products -> reviews */
         redirect('/');

## TEMPLATES:

1.  Templates are similar to layouts in that they also share same UI across multiple components/pages in our app.
2.  Whenever user navigates between routes sharing a template, you get completely a fresh start in terms with
    - A new template component instance is mounted.
    - DOM elements are recreated.
    - State is cleared.
    - Effects are resynchronized
3.  Like layouts, templates need to accept children prop to render the nested route segments.
4.  Layouts and templates can be used to together in which children of layout are rendered first before template and then page.
5.  Layout should be a go to most of the time.

        Rendering takes place in following sequence.

        Layout(children, layout.tsx) -> template(children, template.tsx) ->  page contents(page.tsx)

Take example of input element in (auth) -> layout.tsx.
Here the input element is shared between all 3 register, login, forgot-password routes.
So if we type something in input box and then make a switch between the routes, the input value remains as it is.(If layout.tsx is defined)
With template.tsx, the input box will get cleared when switch is made between the routes. (Try renaming layout.tsx to template.tsx and go to /register, type something and make a switch to /login page)

## LOADING (loading.tsx)

1. Loading provides users immediate feedback when they navigate between routes making the application feel responsive and users know they actually performed some action.
2. Next.js keeps shared layouts interactive while the new content loads. Users can make use of menu/sidebar even when main content isn't ready yet.

## ERROR HANDLING (error.tsx)

1. Can be done by creating new error.tsx file in a route.
2. ErrorBoundary must be a client component.
3. error.tsx automatically wraps route segments and their nested children in a React Error Boundary.
4. You can create custom error UIs for specific segment using file system heirarchy.
5. Error.tsx isolates errors to affected segments while keeping rest of the application functional.
6. It enables you to attempt to recover from an error without requiring a full page reload.

#### HANDLING ERRORS IN A NESTED ROUTE:

    - Errors always bubbles up to find the closest error boundary.
    - An error.tsx file not only handles errors in it own folder, but for all nested child segments below it too.
    - By strategically placing error.tsx files at different levels in your route folders, you can control exactly how detailed your error handling gets.
    - Where you put you error.tsx files makes a huge difference; It determines exactly which parts of your UI gets affected when things go wrong.

Eg. Try moving the error.tsx file from reviewId folder to products folder(check difference now on UI) and again placing it back in reviewId folder(check difference on UI now).

#### HANDLING ERRORS IN LAYOUTS:

    - An error.tsx will handle errors for all of its nested segments(child).
    - But interesting catch with layout.tsx component within same segment.
    - The error boundary won't catch the errors thrown in layout.tsx within the same segment because of how the hierarchy works.
    - The layout sits above the error boundary in the component tree or heirarchy(Check below heirarchy)
    - Solution is to move the error.tsx to parent of layout.tsx

### HANDLING GLOBAL ERRORS:

    - If an error boundary can't catch errors in the layout.tsx file from the same segment, what about the errors in root layout. It doesn't have any parent segment. How to handle those?
    - Next.js provides a special file called `global-error.tsx` that goes in the root app directory.
    - This is the last line of defense when something goes catastrophically wrong at the highest level of the app.
    - Need to include HTML and body tags here in global-error.tsx, as component is replaces the root layout.
    - Works only in production mode(as in dev will throw error).

## COMPONENT HEIRARCHY

      <Layout>
         <Template>
            <ErrorBoundary fallback={<Error />}>   // Error boundary for Run time errors, error.tsx
               <Suspense fallback={<Loading />}>     // Suspense from loading.tsx
                  <ErrorBoundary fallback={<NotFound />}> // Error boundary for Missing resources, not-found.tsx
                     <Page/>
                  </ErrorBoundary>
               </Suspense>
            </ErrorBoundary>
         </Template>
      </Layout>

## PARALLEL ROUTES

1. Parallel routes is an advanced routing mechanism that lets us render multiple pages simultaneously within the same layout.
2. Parallel routes in next.js are defined using a feature called `slots`.
3. Slots help organize content in a modular way.
4. To create a slot, we make use of the `@folder` naming convention.
5. Each defined slot automatically becomes a prop in its corresponding `layout.tsx` file.

   Note: Slots are not route segments and don't affect your url structure. Try navigating to localhost:3000/complex-dashboard/users or @users, we get `Page not found`.
   Children prop in layout.tsx is an implicit slot that doesn't need its own folder. `complex-dashboard/page.tsx` is same as `complex-dashboard/children/page.tsx`.

   Use cases of parallel routes:

   - Dashboard with multiple sections
   - Split-view interfaces
   - Multi-pane layouts
   - Complex admin interfaces

   Benefits:

   - Parallel routes are great for splitting a layout into manageable slots(especially when different teams are working on different parts). But that not the main benefit(can be done using regular components as well).

   - Independent route handling.
     Each slot in your layout, such as users, revenue, notifications, can handle its own loading and error states.
     This granular control is particularly useful in scenarios where different sections of the page load at varying speeds or encounter unique errors. We can have loading(if time consuming) or error shown for that particular slot(users, revenue, notifications)

   - Sub-navigations.
     Each slot can essentially function as a mini-application, complete with its own navigation and state management. Users can interact with each section separately, applying filters, sorting data or navigating through pages without affecting other parts.
     Eg. For notifications we can have users view archived notification instead of default one only changing the url `/complex-dashboard/archived` (archieved) or `/complex-dashboard` (default). Think of as a button/link archieved or default in notifications component.

#### UNMATCHED ROUTE:

1.  Navigation from UI
    When navigating through the UI(clicking links), Next.js keeps showing whatever was in the unmatched slots before.(For children, users, revenue)
2.  Page reload
    Next.js looks for a `default.tsx` file in each unmatched slot.
    This file is critical as it serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL. Without this file, we get a 404(Page not found).
3.  Check the default.tsx file in each users, revenue, root of complex-dashboard(for children). When on `/complex-dashboard/archived` route try refresing the page now, content within this default.tsx for each parallel route will get displayed.

#### CONDITIONAL ROUTES

1. Imagine you want to show different content based on whether a user is logged in or not.
2. You might want to display a dashboard for authenticated users but show a login page for those who aren't authenticated.
3. Conditional routes allow us to achieve this while maintaining completely separate code on same URL.
4. Check the login slot implementation in complex-dashboard.

#### INTERCEPTING ROUTES

1. Intercepting routes is an advanced routing mechanism that allows you to load a routes from another part of your application within the current layout.
2. It's particularly useful when you want to display new content while keeping youe user in the same context.
3. Consider a home page, when user clicks on login button, instead of routing to localhost:3000/login page, when can make use of modal(with `localhost:3000/login` as url).
4. Consider a photo gallery, when user clicks on a photo, instead of showing a dedicated photos page at(`localhost:3000/photos/id`) we can enlarge the photo within the same page a modal(with `localhost:3000/photos/id` as url).
5. So essentially the url is shared or refreshing the page works as well.

   Conventions:

   1. `(.)` to match segments on the same level in folder structure. It is similar to `./`(Current working directory) Check `folder2`(destination) example in `folder1` (source).
   2. For match segments that is one level above, we make use of `(..)`. Similar to `../`. Check `folder3`(destination) example in `folder1`(source)
   3. For match segments that is two level above, we make use of `(..)(..)`. Similar to `../../`. Check `folder4` (destination) example called from `folder2`(source)
   4. `(...)` to match segments from the root app directory. Check `folder5`(destination) example with in `inner-folder2`(source).

#### INTERCEPTING PARALLEL ROUTES

Check the photo-feed folder for code or navigate to localhost:3000/photo-feed

## ROUTE HANDLERS

1. We have learned how to route to pages.
2. The app router lets you create custom request handlers for your routes using a feature called Route Handlers.
3. Unlike page routes, which give us HTML content, Route Handlers let us build RESTful endpoints with complete control over the response.
4. Think of building a Node + Express app.
5. There is no need to set up and configure a separate server.
6. Route handlers are great when making external API requests as well. For if you're building an app that needs to talk to third-party services.
7. Route handlers run server-side, our sensitive info like private keys stays secure and never reaches the browser.
8. Route handlers are equivalent of API routes in Page router.
9. Next.JS supports `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEADER` and `OPTIONS`.
10. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.
11. Just like page routes, route handler must live within the `app` folder.
12. Create hello folder and add new file route.ts(Convention).
13. Nesting is possible for route handlers just like page routes.
14. If page router and route handler are present in same folder(page.tsx and route.ts, route.ts take precedence).
15. To fix point 14, move route.ts into a `api` folder.

##### GET

         export async function GET() {
            return Response.json(comments);
         }

##### POST

         export async function POST(request: Request) {
            const comment = await request.json(); // provides the object coming in body
            const newComment = {
               id: comments.length + 1,
               text: comment.text,
            };

            comments.push(newComment);

            return new Response(JSON.stringify(newComment), {
               headers: { 'Content-Type': 'application/json' },
               status: 201,
            });
         }

#### DYNAMIC ROUTE HANDLERS

1. For simple GET and POST, we do no require any specific id for the request, but for UPDATE, PATCH, DELETE we do. This is when dynamic route handlers come into picture.
2. Dynamic route handlers works similar to dynamic page routes.([id])

##### GET by Id

         /** For now we are interested in accessing id(context) for request, so placing underscore to request */
         export async function GET(
            _request: Request,
            {
               params,
            }: {
               params: Promise<{ id: string }>;
            },
         ) {
            const { id } = await params;
            const comment = comments.find((comment) => comment.id === parseInt(id));

            return Response.json(comment);
         }

##### PATCH

         export async function PATCH(
            request: Request,
            {
               params,
            }: {
               params: Promise<{ id: string }>;
            },
         ) {
            const { id } = await params;
            const body = await request.json();
            const { text } = body;

            const index = comments.findIndex((comment) => comment.id === parseInt(id));

            comments[index].text = text;

            return Response.json(comments[index]);
         }

##### DELETE

         export async function DELETE(
            request: Request,
            {
               params,
            }: {
               params: Promise<{ id: string }>;
            },
         ) {
            const { id } = await params;

            const index = comments.findIndex((comment) => comment.id === parseInt(id));
            const deletedComment = comments[index];

            comments.splice(index, 1);

            return Response.json(deletedComment);
         }

#### URL QUERY PARAMETERS

1.  Suppose in the comments array we want to find all comments having `first` in text of the comment.
2.  We will pass and make a request like: `GET` `localhost:3000/comments?query=first
3.  For this we will need to modify `GET` request.
4.  This is especially used for search, sorting, pagination, etc.

         import { type NextRequest } from 'next/server';

         export async function GET(request: NextRequest) {
            const searchParams = request.nextUrl.searchParams;

            /** This will grab the query params from localhost:3000/comments?query=first i.e first */
            const query = searchParams.get('query');

            /** In case of multiple params we can get it in same way as above
            * const id = searchParams.get("id");
            */

            const filteredComments = query
               ? comments.filter((comment) => comment.text.includes(query))
               : comments;

            return Response.json(filteredComments);
         }

#### HEADERS

1. HTTP Headers represent the metadata assiciated with an API request and response.

##### Request HEADERS

1.  These headers are sent by the client, such as web browser, to the server. They contain essential information about the request, which helps the server understand and process it correctly.
2.  `User-Agent` which identifies the `browser` and `operating system` to the server.
3.  `Accept` which indicates the content types like `text`, `video` or `image formats` that the client can process.
4.  `Authorization` header used by the client to authenticate itself to the server. It carries credentials allowing controlled access to the resources.

         //Options 1
         import { type NextRequest } from 'next/server';

         export async function GET(request: NextRequest) {
            const requestHeaders = new Headers(request.headers);
            console.log(requestHeaders.get('Authorization'));

            return new Response('Profile API data');
         }



         //Option 2
         import {headers} from "next/headers";

         export async function GET(request: NextRequest) {
            const headerList = await headers();
            console.log(headerList.get('Authorization'));

            return new Response('Profile API data');
         }

##### RESPONSE HEADERS

1.  These are send back from the server to the client. They provide information about the server and the data being sent in the response.
2.  `Content-type` header which indicates the media type of the response. it tells the client what the data type of the returned content is, such as text/html for HTML documents, application/json for JSON data, etc.

         export async function GET(request: NextRequest) {
            const headerList = await headers();
            console.log(headerList.get('Authorization'));

            /** This will go as plain/text for response headers. Check network tab in browser*/
            // return new Response('Profile API data');

            /** This will still go as plain/text for response headers.*/
            return new Response('<h1>Profile API data</h1>');

            /** This will go as text/html and will be interpreted by browser as html and display as html tag*/
            return new Response('<h1>Profile API data</h1>', {
               headers: {
                  'Content-Type': 'text/html',
               },
            });
         }

#### COOKIES

1.  Cookies are small pieces of data that a server sends to a user's web browser.
2.  The browser can store the cookies and send them back to the same server with future requests.
3.  Cookies serve 3 main puspose:

    - Managing session(like user login and shopping carts)
    - Handling personalization(such as user preferences and themes)
    - Tracking (Like recording and analyzing user behaviour)

##### Setting cookie:
         //Option 1
         return new Response('<h1>Profile API data</h1>', {
            headers: {
               'Content-Type': 'text/html',
               'Set-Cookie': 'theme=dark',
            },
         });

         //Option 2
         import {headers, cookies} from "next/headers";

         const cookieStore = await cookies();
         cookieStore.set("resultsPerPage", "20");

##### Reading cookie
         //Option 1
         const theme = request.cookies.get("theme");
         console.log(`Cookie`, theme);

         //Option 2
         console.log(cookieStore.get('resultsPerPage'));
