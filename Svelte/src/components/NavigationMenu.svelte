<script>
  import { Link } from 'svelte-routing';
</script>

<nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  
  <style>
    nav {
      background-color: #333;
      color: #fff;
      padding: 10px;
    }
  
    ul {
      display: flex;
      justify-content: space-between;
      list-style: none;
      margin: 0;
      padding: 0;
    }
  
    li {
      margin: 0 10px;
    }
  
    a {
      color: #fff;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
    }
  
    a:hover {
      color: #f7df1e;
    }
  </style>