"use client";

import { Button } from "@jobstack/ds";
import "./firebase";
import { getDatabase, ref, push } from "firebase/database";

const db = getDatabase();
const commentsRef = ref(db, "comments");

export default function Home() {
  return (
    <main>
      <h1>App 2</h1>
      <Button
        onClick={() => {
          push(commentsRef, {
            author: "Georges DIMITRY",
            body: "Awesome talk!",
          });
        }}
      >
        Submit Comment
      </Button>
    </main>
  );
}
