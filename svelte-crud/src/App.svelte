<script>
  let products = [
    {
      id: 1,
      name: "HP Pavilion Notebook",
      description: "HP laptop",
      category: "laptop",
      imageURL: "",
    },
    {
      id: 2,
      name: "Mouse Razer",
      description: "Gaming Mouse",
      category: "peripherials",
      imageURL: "",
    },
  ];
  let product = {
    id:"",
    name: "",
    description: "",
    categroy: "",
    imageURL: "",
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  
  let newProduct={
    id: products.length+1,
    name: product.name,
    description: product.description,
    categroy: product.categroy,
    imageURL: product.imageURL,
  }

   products= products.concat(newProduct)
   console.log(products)
  };
</script>

<main>
  <div class="row">
    <div class="col-md-6">
      {#each products as product}
        <div class="card mt-2 pb-2">
          <div class="row ">
            <div class="col-md-4">
              <img src="../public/images.png" alt="" class="img-fluid p-2"/>
            </div>
            <div class="col-md-8 ">
                <div class="card-body"></div>
              <h5>
                <strong>{product.name}</strong>
                <span><small>{product.category}</small></span>
              </h5>
              <p>{product.description}</p>
             <butto class="btn btn-danger">Delete</butto>
             <butto class="btn btn-secondary">Edit</butto>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <form on:submit={onSubmitHandler}>
            <div class="form-group">
              <input
                bind:value={product.name}
                type="text"
                placeholder="product name"
                id="product-name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <textarea
                bind:value={product.description}
                id="product-description"
                rows="3"
                placeholder="product-description"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input
                bind:value={product.imageURL}
                type="url"
                placeholder="product name"
                id="product-image-url"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <select
                bind:value={product.categroy}
                id="category"
                class="form-control"
              >
                <option
                  value="laptos"
                  placeholder="product name"
                  id="product-image-url">laptos</option
                >
                <option value="peripherials">periferials</option>
                <option value="servers">server</option>
              </select>
            </div>
            <button class="btn-btn-secondary">Save Product</button>
          </form>
          {product.name}
        </div>
      </div>
    </div>
  </div>
</main>

<style></style>
