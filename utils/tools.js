import Vue from "vue";

export const H = Vue.component('my-h', {
    props: ["value", "class"],
    template: `
      <div><h1 class="class">{{value}}</h1></div>
    `,
});

export const Input = Vue.component('my-input', {
    props: ["type", "name", "class", "id", "placeholder"],
    template: `
    <div>
      <input 
        type="type"
        name="name" 
        class="class"
        id="id"
        placeholder="placeholder"
      />
    </div>
    `,
})