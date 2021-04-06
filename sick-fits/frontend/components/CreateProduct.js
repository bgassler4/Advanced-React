import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, resetForm, clearForm } = useForm({
    image: '',
    name: 'Nice Shoes',
    price: 4432,
    description: 'these shoes are great',
  });
  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputs);
        }}
      >
        <fieldset>
          <label htmlFor="image">
            Name
            <input
              type="file"
              required
              id="image"
              name="image"
              value={inputs.image}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              value={inputs.price}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              value={inputs.description}
              onChange={handleChange}
            />
          </label>
          <button type="submit" onClick={clearForm}>
            + Add Product
          </button>
        </fieldset>
      </Form>
    </div>
  );
}
