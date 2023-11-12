"use client";

import { Button } from "@jobstack/ds";
import "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const db = getDatabase();
const commentsRef = ref(db, "comments");

export default function Home() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      setComments(Object.values(snapshot.val()));
    });
    return unsubscribe;
  }, []);

  return (
    <main>
      <h1>App 1</h1>
      <div>{JSON.stringify(comments)}</div>
      <Button as="a" target="_blank" href="http://localhost:3001">
        App 2
      </Button>
    </main>
  );
}
