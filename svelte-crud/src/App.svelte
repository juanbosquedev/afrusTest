<script>
  let product = {
    id: "",
    name: "",
    description: "",
    categroy: "",
    imageURL: "",
  };
</script>

<main>
  <form>
    <input type="text" placeholder="product name" id="product-name" />
    <textarea
      id="product-description"
      rows="3"
      placeholder="product-description"
    />
    <input type="url" placeholder="product name" id="product-image-url" />
    <select  id="category"><option value=""></option></select>
    <button>save Product</button>
  </form>
</main>

<style></style>
