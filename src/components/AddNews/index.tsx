import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
function AddNews() {
  const [textArea, setTextArea] = useState("");
  return (
    <div>
      <h2>Add new</h2>

      <Formik
        initialValues={{
          title: "",
          author: "",
          image: "",
          category: "",
          topic: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            axios.post(
              "https://6576df5f197926adf62ca419.mockapi.io/news",
              values
            );
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" />
            <Field type="text" name="author" />
            <Field type="text" name="image" />
            <Field as="select" name="category" className="selectOpt">
              <option value="null">Category</option>
              <option value="world">World</option>
              <option value="local">Local</option>
              <option value="business">Business</option>
              <option value="technology">Technology</option>
              <option value="entertainment">Entertainment</option>
              <option value="sports">Sports</option>
              <option value="science">Science</option>
              <option value="health">Health</option>
            </Field>
            <Field as="select" name="category" className="selectOpt">
              <option value="null">Topic</option>
              <option value="beyond">Beyond</option>
              <option value="business">Business</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="picked">Picked</option>
              <option value="entertainment">Entertainment</option>
              <option value="science">Science</option>
              <option value="health">Health</option>
              <option value="topStory">Top Story</option>
            </Field>
            <ReactQuill theme="snow" value={textArea} onChange={setTextArea} />;
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddNews;
