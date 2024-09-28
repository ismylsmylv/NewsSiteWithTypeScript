import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config.js"; // Firestore instance

import { Field, Form, Formik } from "formik";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { getnews } from "../../redux/slices/connectSlice";
import "./style.scss";
function AddNews() {
  const [textArea, setTextArea] = useState("");
  const dispatch = useAppDispatch();
  return (
    <div className="AddNews">
      <h2>Add new</h2>

      <Formik
        initialValues={{
          title: "",
          authors: "",
          image: "",
          category: "",
          topic: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const date = new Date();
            const formattedDate = date.toDateString().slice(4, 15);
            console.log(formattedDate);
            await addDoc(collection(db, "news"), {
              ...values,
              text: textArea,
              date: date,
            }).then(() => {
              console.log("posted");
            });
            dispatch(getnews());
          } catch (error) {
            console.error("Error adding document: ", error);
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="grid">
              <Field type="text" name="title" placeholder="Title" />
              <Field type="text" name="authors" placeholder="Author" />
              <Field type="text" name="image" placeholder="Image" />
              <div className="dropdowns">
                <Field as="select" name="category">
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
                <Field as="select" name="topic">
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
              </div>
            </div>
            <ReactQuill
              className="textarea"
              theme="snow"
              value={textArea}
              onChange={setTextArea}
              placeholder="Content"
            />

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
