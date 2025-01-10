The issue arises when using Tailwind's `@apply` directive within a custom directive.  For example:

```javascript
<script>
  function myDirective(el) {
    el.classList.add('bg-blue-500');
    el.classList.add('@apply text-white'); // Incorrect usage of @apply
  }
</script>
```

Tailwind's `@apply` directive is a utility for applying pre-defined styles during the build process and is not meant to be used directly within JavaScript. Trying to add it dynamically using `classList.add()` will not work. 