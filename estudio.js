  const color = document.querySelector('#color')
  const salida = document.querySelector('#salida')
  const storage = localStorage.getItem("colorValue") || "#ffffff" //traer valor de local storage 
  const buttonMenu = document.querySelector(".show")
  color.value = storage
  const setColor = () => {
      salida.innerHTML = color.value
      salida.style.background = color.value
      salida.style.color = "#fff"
      document.body.style.backgroundColor = color.value
  }
  const saveColor = (value) => {
      localStorage.setItem("colorValue", value)
  }
  setColor()
  color.addEventListener('input', setColor)
  color.addEventListener('change', () => saveColor(color.value)) //para obtener el valor de una funcion se tiene q crear una funcion anonima como la arrow function
  // buttonMenu.addEventListener('mouseover',() => {
  //   document.body.style.backgroundColor  =  color.value
  


  // })













  // // fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=ba3d6c44cb9d1524ba69f9e8b678ceed')
  // // .then(res=>res.json())
  // // .then(json=> data(json))
  // // const data = async(data)=>{
  // //   console.log(await weather(data))
  // // }
  // // const weather=(data)=>{
  // //   return data.weather
  // }