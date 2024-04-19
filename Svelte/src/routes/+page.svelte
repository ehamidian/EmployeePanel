<script>
  import { getAllEmployees } from './api.js';
  import EmployeeList from '../components/EmployeeList.svelte';
  import {onMount} from 'svelte'
  
  let employees = [];

  
  const fetchEmployees = async () => {
    const data = await getAllEmployees();
    console.log(data.data[0])
    employees = data.data.map(employee => ({
      name: employee.attributes.Name,
      title: employee.attributes.JobTitle,
      imageSrc: employee.attributes.ProfilePic,
    }));
  };

  onMount(fetchEmployees)

  onMount(async () => {
    const response = await fetch('http://localhost:1337/navigation-menu');
    menuData = await response.json();
  });
</script>

<div class="center">
<a class="button-link" href="http://localhost:5173/newEmployee">New Employee</a>
</div>

<h1>Welcome to Employee Project</h1>

<EmployeeList employees={employees}/>

<style>
  /* Style for the link that looks like a button */
  .button-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ecb00b; /* Button color */
    color: rgb(5, 4, 4); /* Text color */
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  /* Optional: Hover effect */
  .button-link:hover {
    background-color: #c47703; /* Darker color on hover */
  }

  .center {
    display: flex;
    justify-content: center;
    margin-top: 20px; /* Add spacing from the top */
  }
</style>


