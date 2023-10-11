import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 h-44 flex justify-center items-center gap-5 pt-16">
      <div>
        <div class="text-3xl text-white font-bold">Dawar Zadna Restaurant</div>
        <div class="text-white font-extralight">
          <div>Opposite to Nest Hyper Market</div>
          <div>ph: 39384932</div>
        </div>
      </div>
      <div>Location</div>
    </div>
  );
});
