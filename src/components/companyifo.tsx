import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="p-2 h-44 flex  gap-5 pt-16">
      <div>
        <div class="text-2xl  font-bold">Dawar Zadna Restaurant</div>
        <div class="font-extralight">
          <div>Opposite to Nest Hyper Market</div>
          <div>ph: 39384932</div>
        </div>
      </div>
      <div>Location</div>
    </div>
  );
});
