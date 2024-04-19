<script>
  export let employee;


</script>

<div class="card">
  <div class="image-container">
  <img src= {'http://localhost:1337/uploads/' + employee.name + '.jpg'} alt={employee.name} />
  </div>
  <h2>{employee.name}</h2>
  <p>{employee.title}</p>
</div>
<style>
  .card {
    border: 2px solid #1d0117;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
  }

  .image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid black;
  background-color: #c8c4c4;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

  img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;;
  }

  h2 {
  font-size: 24px;
  margin-bottom: 5px;
  }

  p {
  color: #666;
  font-size: 18px;
  margin: 5px 0;
  }
</style>
