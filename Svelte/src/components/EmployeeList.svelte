<script>
    import EmployeeCard from './EmployeeCard.svelte';
    export let employees = [
      { name: 'Hannes Kracht', title: 'Designer', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGvFJ9IINe0jYp35DlB7F9WlsC9iqE_wZCMQ&usqp=CAU' },
      { name: 'Aaron Zellner', title: 'Developer', imageSrc: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg' },
      { name: 'Elham Hamidian', title: 'Data Analyst', imageSrc: 'https://assets.website-files.com/61a3c3005e14bffd1c77eea9/6330c2d90ee1f12d81c67298_Profile%20Picture%20Maker.webp' },
    ];
</script>

<div class="employee-list">
    {#each employees as employee}
    <EmployeeCard {employee} />
    {/each}
</div>

 <style>
    .employee-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      margin: 20px;
    }
  </style>