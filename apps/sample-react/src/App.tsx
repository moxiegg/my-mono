import Footer from "@repo/ui/footer";

function App() {

  return (
    <div>
      <Footer
        footerTitle="Title"
        githubLink="https:github.com"
        linkedInLink="https:linkedin.com"
        emailLink=""
        builtTools={["React"]}
      />
    </div>
  );
}

export default App;
