import Form from "react-bootstrap/Form";

const ReviewForm = () => {
  return (
    <div className="review-form">
      <h5 className="form-title text-center my-5 ">Rəy Bildir</h5>
      <form>
        <div className="form-fullname">
          <Form.Group>
            <Form.Label>Ad</Form.Label>
            <Form.Control type="text" placeholder="Adınızı daxil edin" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Soyad</Form.Label>
            <Form.Control type="text" placeholder="Soyadınızı daxil edin" />
          </Form.Group>
        </div>
        <label htmlFor="review-select-options">Rəy bildirdiyiniz məhsulu seçin</label>
        <Form.Select id="review-select-options">
          <option defaultValue="Məhsulu seçin">Məhsulu seçin</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <label htmlFor="textarea">Rəyinizi yazın</label>
        <textarea id="textarea" cols={30} rows={10} placeholder="Rətinizi buraya yazın"></textarea>
        <button className="submit-button main-button">Rəyini bildir</button>
      </form>
    </div>
  );
};

export default ReviewForm;
