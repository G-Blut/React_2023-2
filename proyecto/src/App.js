import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)">CVC</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Log In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Sign In</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Main</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default App;
