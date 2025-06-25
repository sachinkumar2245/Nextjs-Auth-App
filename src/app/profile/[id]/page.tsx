interface Params {
  params: {
    id: string;
  };
} //here we created a custom params input type in order to accept string

//here we create a [id] to grab the id as in next js folder structure is really important and file naming in order to perform target the frontend and the backend separately and more efficiently

export default function UserProfile({ params }: Params) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile Page</h1>
      <hr />
      <span className="p-2 text-black font-bold bg-orange-200">
        {params.id}
      </span>
    </div>
  );
}
