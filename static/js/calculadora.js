const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)


const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj)
  const attrs = []

  for (let i = 0; i < keys.length; i++) {
    
    let attr = keys[i]
    attrs.push(`${attr}="${obj[attr]}"`)
  }

  const string = attrs.join('')

  return string
}


const tagAttrs = obj => (content = "") =>
 `<${obj.tag}${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs)}>${content}</${obj.tag}>`

const tag = t => {
  if(typeof (t) === 'string'){
    return tagAttrs({tag:t})

    }else {
      return tagAttrs(t)
    }
  }


const tableRowTag = tag('tr') 

const tableRow = items => compose(tableRowTag, tableCells)(items)

const tableCell = tag('td')

const tableCells = items => items.map(tableCell).join('')

const trashIcon = tag({tag: 'i', attrs:{class: 'fas fa-trash-alt'}})('')


let description = document.getElementById('description')
let calories = document.getElementById('calories')
let carbs = document.getElementById('carbs')
let protein = document.getElementById('protein')


let list = []


const validateInputs = () => {
  description.value ? '' : description.classList.add('is-invalid')
  calories.value ? '' : calories.classList.add('is-invalid')
  carbs.value ? '' : carbs.classList.add('is-invalid')
  protein.value ? '' : protein.classList.add('is-invalid')

  if(description.value && calories.value && carbs.value && protein.value) 
    add()

}

const add = () => {
  const newItem = {
    description: description.value,
    calories:parseInt(calories.value),
    carbs:parseInt(carbs.value),
    protein:parseInt(protein.value)
  }

    list.push(newItem)
    updateTotals()
    cleanInputs()
    renderItems()
    console.log(list)
  }


  const updateTotals = () => {
    let calories = 0, carbs = 0, protein = 0

    list.map(item => {
      calories += item.calories,
      carbs += item.carbs,
      protein += item.protein
    })

    $('#totalCalories').text(calories)
    $('#totalCarbs').text(carbs)
    $('#totalProtein').text(protein)

  }


  const cleanInputs = () => {
    description.value =''
    calories.value =''
    carbs.value =''
    protein.value =''
}
 

const renderItems = () => {
  $('tbody').empty()

  list.map((item, index )=> {
    
    const removeButton = tag({
      tag:'button',
      attrs: {
        class: 'btn btn-outline-danger',
        onclick: `removeItem(${index})`
      }
    })(trashIcon)

    $('tbody').append(tableRow([item.description, item.calories, item.carbs,item.protein, removeButton ]))
  })
}


const removeItem = (index) => {
  list.splice(index,1)

  updateTotals()
  renderItems()

}


description.addEventListener('keydown', () => description.classList.remove('is-invalid'))
calories.addEventListener('keydown', () => calories.classList.remove('is-invalid'))
carbs.addEventListener('keydown', () => carbs.classList.remove('is-invalid'))
protein.addEventListener('keydown', () => protein.classList.remove('is-invalid'))





