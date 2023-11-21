<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
  const decrement = () => {
    count -= 1;
  };
</script>

<div>
  <button on:click={decrement}> - </button>
  <h3>
    count is {count}
  </h3>
  <button on:click={increment}> + </button>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    justify-items: stretch;
    align-items: center;
  }
  button {
    margin: 0 5%;
    height: 50px;
    border: solid 1px grey;
  }
  button:hover {
    border-color: rgb(70, 21, 187);
  }
</style>
