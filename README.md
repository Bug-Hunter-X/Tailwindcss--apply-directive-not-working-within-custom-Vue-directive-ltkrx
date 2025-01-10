# Tailwindcss @apply Directive Issue in Vue.js Custom Directive

This repository demonstrates a common issue encountered when using Tailwind CSS's `@apply` directive within a custom Vue.js directive. The `@apply` directive is intended for compile-time style application, and directly using it in runtime JavaScript results in unexpected behavior. 

## Problem
The `@apply` directive is not dynamically applied when used within a custom directive. Attempting to add it using `classList.add()` does not work as intended.  The solution avoids using `@apply` dynamically and instead applies the styles directly.

## Solution
The solution provides a corrected version of the directive, directly adding the desired classes to the element's class list. This leverages Tailwind's class names without relying on `@apply` at runtime.