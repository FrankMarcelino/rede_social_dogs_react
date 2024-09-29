import React from "react";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import { PHOTO_GET } from "../../Api";
import { useParams } from "react-router-dom";
import PhotoContent from "./PhotoContent";
import Head from "../Helper/head";

const Photo = () => {
  const { id } = useParams();
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.title} description={data.description} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
