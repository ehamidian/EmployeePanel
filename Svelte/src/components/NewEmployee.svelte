<script>
    import NewEmployee from './NewEmployee.svelte';
    import axios from 'axios';

  
    let name = '';
    let jobTitle = '';
    let files;

  const API_URL = 'http://localhost:1337';

  async function handleImageUpload(file) {
  
  const validImageTypes = ['image/png', 'image/jpeg'];
  if (!validImageTypes.includes(file.type)) {
    alert('Invalid file format. Please upload a PNG or JPEG image.');
    return;
  }

  const maxFileSize = 5 * 1024 * 1024;
  if (file.size > maxFileSize) {
    alert('File size exceeds the limit of 5 MB.');
    return;
  }

  const formData = new FormData();
  formData.append("files", file);
  try {
    const response = await axios.post("http://localhost:1337/api/upload", formData);
    const result = response.data;
    return result;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
  
  /* async function handleImageUpload(file) {
  const formData = new FormData();
  formData.append("files", file);
  const response = await fetch("http://localhost:1337/upload", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  console.log(result);
}
*/

/*async function handleImageChange(event) {
    const file = event.target.files[0];
    await handleImageUpload(file);
  }
*/

 async function handleSubmit(event) {
  event.preventDefault();
  console.log(files);
  const upload = await handleImageUpload(files[0]);
  console.log("upload", upload)
  
  // Make a POST request to the Strapi API to create a new employee
  
  axios.post(`${API_URL}/api/employees`, {
    "data": {
        Name: name,
        JobTitle: jobTitle,
        ProfilePic: upload,
    }
})
  .then(response => {
  })
  .catch(error => {
    console.error(error);
  });
}

  </script>
  
  <h1>New Employee</h1>

  <form on:submit={handleSubmit}>
    <label>
      Name:
      <input type="text" bind:value={name} />
    </label>
  
    <label>
      JobTitle:
      <input type="text" bind:value={jobTitle} />
    </label>

    <label>
      ProfilePicture:
    <input accept="image/png, image/jpeg" bind:files id="avatar" name="profilePic" type="file"/>
    <!-- <input type="file" on:change={handleImageChange} /> -->
    </label>

  
    <button type="submit">Create Employee</button>
  </form>