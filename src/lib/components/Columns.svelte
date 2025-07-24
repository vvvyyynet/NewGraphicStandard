<!-- 

--------------------------
USAGE
(paste this into any Page.md to see it in action)
--------------------------

<script>
    import Columns from '$lib/components/Columns.svelte';
</script>

<Columns ncols={3} gap={20} classes="bg-green-100 p-2">

**(1)** Every paragraph goes to

**(2)** another column

<div>

**(3)** To group multiple paragraphs into one single column...

...you have to wrap them in `<div></div>` and **make sure there are empty lines** between the `<div>`s and the markdown text!

</div>

**(1 again)** If the number of blocks inside `<Columns></Columns>` is greater than `ncols`, it just restarts at column 1.

</Columns>

<Columns ncols={[3,2,1]} gap={20} classes="bg-orange-100 p-2">

**Responsiveness** If you pass an array to `ncols` and/or `gap` this will pass the values as media-queries for `[large, medium, small]` screens.

**Foo**

**Bar**

</Columns>

<Columns ncols={[3,1,1]} gap={10} classes="bg-yellow-100 p-2 mt-10">

**(1)**

**(2)**

**(3)**

<div class="lg:col-span-2 bg-red-200 p-2">

**(1 and 2)** Like so you can span multiple columns. However, be aware that this make it impossible for the parent `<Columns>` to shrink its number of columns below this value (i.e. ncols={1} won't be possible.).

</div>

</Columns>

<Columns ncols={[3,1,1]} gap={10} classes="bg-sky-100 p-2 mt-10">

**With `ncols`** you can set the number of columns.

**With `gap`** you can set the gap between the columns.

**With `classes`** you can pass any tailwind properties.

</Columns>

-->

<script>
    let {ncols=[1,1,1], gap=[10,10,10], classes=""} = $props()
    if (typeof ncols == "number") ncols = [ncols, ncols, ncols]
    if (typeof gap == "number") gap = [gap, gap, gap]
</script>

<div class={[`grid lg:grid-cols-${ncols[0]} lg:gap-${gap[0]} gap-y-0`, classes]}>
<!-- <div class={[
    "grid" , 
    `lg:grid-cols-${ncols[0]} lg:grid-cols-${ncols[1]} grid-cols-${ncols[2]}`, 
    `lg:gap-${gap[0]} lg:gap-${gap[1]} gap-${gap[2]}`, 
    "gap-y-0", 
    classes]}> -->
<slot></slot>
</div>

<!-- Safelists to prevent treeshaking -->

<!-- 
'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5', 'grid-cols-6', 'grid-cols-7', 'grid-cols-8', 'grid-cols-9',
'md:grid-cols-1', 'md:grid-cols-2', 'md:grid-cols-3', 'md:grid-cols-4', 'md:grid-cols-5', 'md:grid-cols-6', 'md:grid-cols-7', 'md:grid-cols-8', 'md:grid-cols-9',
'lg:grid-cols-1', 'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4', 'lg:grid-cols-5', 'lg:grid-cols-6', 'lg:grid-cols-7', 'lg:grid-cols-8', 'lg:grid-cols-9', 
-->

<!-- 
  'gap-0', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-7', 'gap-8', 'gap-9',
  'gap-10', 'gap-11', 'gap-12', 'gap-13', 'gap-14', 'gap-15', 'gap-16', 'gap-17', 'gap-18', 'gap-19',
  'gap-20', 'gap-21', 'gap-22', 'gap-23', 'gap-24', 'gap-25', 'gap-26', 'gap-27', 'gap-28', 'gap-29',
  'gap-30', 'gap-31', 'gap-32', 'gap-33', 'gap-34', 'gap-35', 'gap-36', 'gap-37', 'gap-38', 'gap-39',
  'gap-40', 'gap-41', 'gap-42', 'gap-43', 'gap-44', 'gap-45', 'gap-46', 'gap-47', 'gap-48', 'gap-49',
  'gap-50', 'gap-51', 'gap-52', 'gap-53', 'gap-54', 'gap-55', 'gap-56', 'gap-57', 'gap-58', 'gap-59',
  'gap-60', 'gap-61', 'gap-62', 'gap-63', 'gap-64', 'gap-65', 'gap-66', 'gap-67', 'gap-68', 'gap-69',
  'gap-70', 'gap-71', 'gap-72', 'gap-73', 'gap-74', 'gap-75', 'gap-76', 'gap-77', 'gap-78', 'gap-79',
  'gap-80', 'gap-81', 'gap-82', 'gap-83', 'gap-84', 'gap-85', 'gap-86', 'gap-87', 'gap-88', 'gap-89',
  'gap-90', 'gap-91', 'gap-92', 'gap-93', 'gap-94', 'gap-95', 'gap-96', 'gap-97', 'gap-98', 'gap-99',

  'md:gap-0', 'md:gap-1', 'md:gap-2', 'md:gap-3', 'md:gap-4', 'md:gap-5', 'md:gap-6', 'md:gap-7', 'md:gap-8', 'md:gap-9',
  'md:gap-10', 'md:gap-11', 'md:gap-12', 'md:gap-13', 'md:gap-14', 'md:gap-15', 'md:gap-16', 'md:gap-17', 'md:gap-18', 'md:gap-19',
  'md:gap-20', 'md:gap-21', 'md:gap-22', 'md:gap-23', 'md:gap-24', 'md:gap-25', 'md:gap-26', 'md:gap-27', 'md:gap-28', 'md:gap-29',
  'md:gap-30', 'md:gap-31', 'md:gap-32', 'md:gap-33', 'md:gap-34', 'md:gap-35', 'md:gap-36', 'md:gap-37', 'md:gap-38', 'md:gap-39',
  'md:gap-40', 'md:gap-41', 'md:gap-42', 'md:gap-43', 'md:gap-44', 'md:gap-45', 'md:gap-46', 'md:gap-47', 'md:gap-48', 'md:gap-49',
  'md:gap-50', 'md:gap-51', 'md:gap-52', 'md:gap-53', 'md:gap-54', 'md:gap-55', 'md:gap-56', 'md:gap-57', 'md:gap-58', 'md:gap-59',
  'md:gap-60', 'md:gap-61', 'md:gap-62', 'md:gap-63', 'md:gap-64', 'md:gap-65', 'md:gap-66', 'md:gap-67', 'md:gap-68', 'md:gap-69',
  'md:gap-70', 'md:gap-71', 'md:gap-72', 'md:gap-73', 'md:gap-74', 'md:gap-75', 'md:gap-76', 'md:gap-77', 'md:gap-78', 'md:gap-79',
  'md:gap-80', 'md:gap-81', 'md:gap-82', 'md:gap-83', 'md:gap-84', 'md:gap-85', 'md:gap-86', 'md:gap-87', 'md:gap-88', 'md:gap-89',
  'md:gap-90', 'md:gap-91', 'md:gap-92', 'md:gap-93', 'md:gap-94', 'md:gap-95', 'md:gap-96', 'md:gap-97', 'md:gap-98', 'md:gap-99',
  
  'lg:gap-0', 'lg:gap-1', 'lg:gap-2', 'lg:gap-3', 'lg:gap-4', 'lg:gap-5', 'lg:gap-6', 'lg:gap-7', 'lg:gap-8', 'lg:gap-9',
  'lg:gap-10', 'lg:gap-11', 'lg:gap-12', 'lg:gap-13', 'lg:gap-14', 'lg:gap-15', 'lg:gap-16', 'lg:gap-17', 'lg:gap-18', 'lg:gap-19',
  'lg:gap-20', 'lg:gap-21', 'lg:gap-22', 'lg:gap-23', 'lg:gap-24', 'lg:gap-25', 'lg:gap-26', 'lg:gap-27', 'lg:gap-28', 'lg:gap-29',
  'lg:gap-30', 'lg:gap-31', 'lg:gap-32', 'lg:gap-33', 'lg:gap-34', 'lg:gap-35', 'lg:gap-36', 'lg:gap-37', 'lg:gap-38', 'lg:gap-39',
  'lg:gap-40', 'lg:gap-41', 'lg:gap-42', 'lg:gap-43', 'lg:gap-44', 'lg:gap-45', 'lg:gap-46', 'lg:gap-47', 'lg:gap-48', 'lg:gap-49',
  'lg:gap-50', 'lg:gap-51', 'lg:gap-52', 'lg:gap-53', 'lg:gap-54', 'lg:gap-55', 'lg:gap-56', 'lg:gap-57', 'lg:gap-58', 'lg:gap-59',
  'lg:gap-60', 'lg:gap-61', 'lg:gap-62', 'lg:gap-63', 'lg:gap-64', 'lg:gap-65', 'lg:gap-66', 'lg:gap-67', 'lg:gap-68', 'lg:gap-69',
  'lg:gap-70', 'lg:gap-71', 'lg:gap-72', 'lg:gap-73', 'lg:gap-74', 'lg:gap-75', 'lg:gap-76', 'lg:gap-77', 'lg:gap-78', 'lg:gap-79',
  'lg:gap-80', 'lg:gap-81', 'lg:gap-82', 'lg:gap-83', 'lg:gap-84', 'lg:gap-85', 'lg:gap-86', 'lg:gap-87', 'lg:gap-88', 'lg:gap-89',
  'lg:gap-90', 'lg:gap-91', 'lg:gap-92', 'lg:gap-93', 'lg:gap-94', 'lg:gap-95', 'lg:gap-96', 'lg:gap-97', 'lg:gap-98', 'lg:gap-99'
   -->