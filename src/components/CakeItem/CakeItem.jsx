import PropTypes from 'prop-types';

// export const CakeItem = (data) => {
//    console.log(data)
//    return <li>
//         <h3>{data.info.title}</h3>
//         <p>{data.info.price}</p>
//         <img src={data.info.photo} alt={data.info.title} />
//     </li>
// }

//Деструктуризуємо дату в пропсах

export const CakeItem = ({info, test}) => {
   console.log(test)
   const {title, price, photo} = info
   return <li>
        <h3>{title}</h3>
        <p>{price}</p>
        <img src={photo} alt={title} />
    </li>
}

CakeItem.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  title: PropTypes.string,
  price: PropTypes.string,
  photo: PropTypes.string,
  test: PropTypes.number
}