import { component$ } from "@builder.io/qwik";

interface SubHeadingProps {
  title?: string;
}
export default component$<SubHeadingProps>(({ title }) => {
  return <div class="text-xl text-gray-900 py-2">{title}</div>;
});
