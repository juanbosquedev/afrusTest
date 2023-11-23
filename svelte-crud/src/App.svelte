<script lang="ts">
    interface Product {
      id: number;
      name: string;
      description: string;
      category: string;
      imageURL: string;
    }
  
    let products: Product[] = [
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
        category: "peripherals",
        imageURL: "",
      },
    ];
  
    let product: Product = {
      id: 0,
      name: "",
      description: "",
      category: "",
      imageURL: "",
    };
  
    const inputCleaner = () => {
      product = {
        id: 0,
        name: "",
        description: "",
        category: "",
        imageURL: "",
      };
    };
  
    const productDelete = (id: number) => {

      products = products.filter((p) => p.id !== id);
    };
    const productEdit = (productEdit:Product) => {

product = productEdit;
};
  
    const onSubmitHandler = (e: Event) => {
      e.preventDefault();
  
      let newProduct: Product = {
        id: products.length + 1,
        name: product.name,
        description: product.description,
        category: product.category,
        imageURL: product.imageURL,
      };
  
      products = [...products, newProduct];
      inputCleaner();
    };
  </script>
  
  <main>
    <div class="container p-4">
      <div class="row">
        <div class="col-md-6">
          {#each products as product}
            <div class="card mt-2 pb-2">
              <div class="row">
                <div class="col-md-4">
                  {#if !product.imageURL}
                    <img src="../public/images.png" alt="" class="img-fluid p-2" />
                  {:else}
                    <img src={product.imageURL} alt="" class="img-fluid p-2" />
                  {/if}
                </div>
                <div class="col-md-8">
                  <div class="card-body" />
                  <h5>
                    <strong>{product.name}</strong>
                    <span><small>{product.category}</small></span>
                  </h5>
                  <p>{product.description}</p>
                  <button class="btn btn-danger" on:click={() => productDelete(product.id)}>Delete</button>
                  <button class="btn btn-secondary" on:click={() => productEdit(product)}>Edit</button>
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
                    bind:value={product.category}
                    id="category"
                    class="form-control"
                  >
                    <option value="laptops" placeholder="product name" id="product-image-url">laptops</option>
                    <option value="peripherals">peripherals</option>
                    <option value="servers">servers</option>
                  </select>
                </div>
                <button type="submit" class="btn-btn-secondary">Save Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  <style>
    /* Estilos aquí */
  </style>
  