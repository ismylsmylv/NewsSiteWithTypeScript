import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config.ts"; // Firestore instance

import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getId, getnews } from "../../redux/slices/connectSlice";
import "./style.scss";
function EditNews() {
  const [textArea, setTextArea] = useState("");
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const idNews = useAppSelector((state) => state.connect.idNews);
  useEffect(() => {
    dispatch(getId(id as string));
    setTextArea(idNews.text);
  }, [idNews.text, dispatch, id]);
  return (
    <>
      {localStorage.getItem("admin") == import.meta.env.VITE_APP_ADMIN_KEY && (
        <div className="EditNews container">
          <h2>Add new</h2>
          <Formik
            enableReinitialize={true}
            initialValues={{
              title: idNews?.title,
              authors: idNews?.authors,
              image: idNews?.image,
              category: idNews?.category,
              topic: idNews?.topic,
            }}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const date = new Date();

                const docRef = doc(db, "news", id as string);

                await updateDoc(docRef, {
                  ...values,
                  text: textArea,
                  date: date,
                }).then(() => {
                  console.log("News updated successfully");
                });

                dispatch(getnews());
              } catch (error) {
                console.log(`Error updating news, ${error}`);
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
      )}
    </>
  );
}

export default EditNews;
