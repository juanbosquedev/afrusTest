<script>
  let product = {
    id: "",
    name: "",
    description: "",
    categroy: "",
    imageURL: "",
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
</script>

<main>
  <form on:submit={onSubmitHandler}>
    <input
      bind:value={product.name}
      type="text"
      placeholder="product name"
      id="product-name"
      class="form-control"
    />
    <textarea
      bind:value={product.description}
      id="product-description"
      rows="3"
      placeholder="product-description"
      class="form-control"
    />
    <input
      bind:value={product.imageURL}
      type="url"
      placeholder="product name"
      id="product-image-url"
      class="form-control"
    />
    <select bind:value={product.categroy} id="category" class="form-control">
      <option value="laptos" placeholder="product name" id="product-image-url"
        >laptos</option
      >
      <option value="peripherials">periferials</option>
      <option value="servers">server</option>
    </select>
    <button>save Product</button>
  </form>
  {product.name}
</main>

<style></style>
