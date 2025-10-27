// 1. what is the block level element and inline elemnet ?
// - block level element start on a new line and occupy the full width available like paragraph .
// - in line element don't start a new line and only occupy the width necessary. like links or span img

// 2. what is the purpose of iframe tag in HTML . 
// - the iframe html tag is used to embed another html document within the current document . 

//  3. what is the purpose of the contenteditable attribute in html ?
//  - allows you to make an element editable by the User.

// 4. What is a CSS Preprocessor?
// A CSS preprocessor is a tool that extends the capabilities of regular CSS by adding programming features 
// like variables, functions, nesting, and mixins. You write your styles in the preprocessor’s syntax, 
// then the preprocessor compiles that code into regular CSS that browsers can understand.

// Why use a CSS Preprocessor?
// Variables: Store colors, fonts, or sizes once, then reuse them easily.
// Nesting: Write selectors inside other selectors for better structure and readability.
// Mixins: Create reusable chunks of CSS code.
// Functions & Operations: Perform calculations, manipulate colors, etc.
// Modularity: Split CSS into multiple files and import them for better organization.

// 5. - what is Display ? 
// The display property in CSS defines how an HTML element is displayed in the layout — it determines the element’s box type 
// and how it interacts with other elements.

// Display properties:
// block -:  The element takes up the full width and starts on a new line. (e.g., <div>, <p>)
// inline -:  The element only takes up as much width as needed and doesn’t break the line. (e.g., <span>)
// inline-block -:  Like inline, but allows setting width and height.
// none -:  Hides the element from the page (it is removed from the layout).
// flex -:  Enables Flexbox layout model for flexible and responsive layouts.
// grid -:  Enables CSS Grid layout for two-dimensional designs.
// contents -:  Makes the container disappear visually but keeps its children.

// 6-  What is a CSS Box?
// In CSS, every HTML element is considered as a box, and this concept is known as the CSS Box Model. 
// It defines how the element's size and spacing are calculated on a web page.

// CSS Box Model Components:
// Content -- The actual content like text, images, etc.
// Padding -- Space between the content and the border.
// Border -- The boundary surrounding the padding (and content).
// Margin -- Space outside the border, separating the element from others.


// 7 - What is position in CSS?
// The position property decides how an element is placed on the page.
// 🔹 Types:
// static - Default. Follows normal flow.
// relative - Moves from its original place using top, left, etc.
// absolute - Positioned based on the nearest parent element that has position set (not static).
// fixed - Stays fixed to the browser window. Doesn't move on scroll.
// sticky - Acts like relative until scroll, then sticks like fixed.

// 8 - What is Flexbox in CSS?
// Flexbox (Flexible Box) is a CSS layout method that helps us arrange elements in a row or column. 
// It makes it easy to align, space, and resize items inside a container — even when the size of the items is not fixed.
// Common Flexbox Properties:
// 👉 For the container:
// flex-direction: Row or column layout (row, column)
// justify-content: Horizontal alignment (flex-start, center, space-between, etc.)
// align-items: Vertical alignment (stretch, center, flex-start, etc.)
// flex-wrap: Allow items to wrap onto multiple lines

// 9- What is Grid in CSS? 
// CSS Grid is a layout system used to create web layouts in rows and columns. 
// It gives you more control over both horizontal and vertical placement of items.
// Grid is used when you need a 2D layout (rows + columns).
// Flexbox is better for 1D layouts (row or column).

// 10 - What is Tailwind CSS? 
// Tailwind CSS is a utility-first CSS framework used to design modern and responsive web interfaces quickly.
// Instead of writing custom CSS, you use predefined utility classes directly in your HTML to style elements.

// 11 - What is SASS? 
// SASS (Syntactically Awesome Stylesheets) is a CSS preprocessor that extends CSS by adding powerful features like:
// Variables -	Reuse values like colors, fonts, sizes
// Nesting-	Write CSS in a more structured way (like HTML)
// Mixins	-Reuse groups of styles (like functions)
// Inheritance-	Use @extend to share styles between classes
// Functions	-Do calculations and logic (e.g., lighten())
// Modular Code	- Break CSS into smaller files (@import or @use)

// 12 - What is the difference between a semantic and non-semantic element in HTML?
// Answer: Semantic elements clearly define their content’s meaning (e.g., <header>, <article>), 
// while non-semantic elements like <div> or <span> do not. Semantic tags improve accessibility, SEO, and code readability.

// 13 - What is Specificity in CSS?
// Specificity in CSS is a set of rules that the browser uses to decide which CSS rule to apply when multiple rules target the same element.

// Inline styles > ID selector (#id)	> Class (.class) > Element/tag (div) > Universal (*)

// 14- What is HTML? 
// HTML (HyperText Markup Language) is the standard language used to create and structure web pages.
// It tells the browser what content to display (like text, images, videos) and how it is organized.

// CSS stands for Cascading Style Sheets. 
// It is a stylesheet language used to describe the presentation (style and layout) of HTML elements on a webpage.

// 👉 Accessibility in web development means making websites usable by everyone, including people with 
// disabilities (like vision, hearing, mobility, or cognitive impairments).
// It ensures that all users can perceive, understand, navigate, and interact with your application.
// Alt Text for Images - Keyboard Navigation- Form Labels - ARIA (Accessible Rich Internet Applications)
// <button aria-expanded="false" aria-controls="menu">Menu</button>
// - Color Contrast

// 👉 “ARIA stands for Accessible Rich Internet Applications. It’s a set of attributes that make dynamic or custom UI components 
// accessible to assistive technologies like screen readers. ARIA provides roles (what an element is), 
// states (its current condition like expanded/collapsed), and properties (extra info like what element it controls). 
// For example, we can use aria-expanded on a dropdown button, 
// or role="dialog" on a modal. The key is to prefer semantic HTML first and use ARIA only when needed.”
