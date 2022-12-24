import { createBrowserRouter } from "react-router-dom";
import { CollectionsList } from "./pages/collectionsList";
import { TopicPhotos } from "./pages/topicPhotos";

export const router = createBrowserRouter([
    { path: '/', element: <CollectionsList /> },
    { path: ':topicName', element: <TopicPhotos /> }
])