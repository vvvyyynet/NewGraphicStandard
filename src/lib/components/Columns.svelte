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

<div class="md:col-span-2 bg-red-200 p-2">

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

<div class={[
    "grid" , 
    `lg:grid-cols-${ncols[0]} md:grid-cols-${ncols[1]} grid-cols-${ncols[2]}`, 
    `lg:gap-${gap[0]} md:gap-${gap[1]} gap-${gap[2]}`, 
    "gap-y-0", 
    classes]}>
<slot></slot>
</div>
