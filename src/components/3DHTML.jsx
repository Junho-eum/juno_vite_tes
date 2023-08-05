function HtmlComp() {
  return (
    <>
    <p className='figure-description'>Use your mouse to rotate the 3D plot. Scroll to zoom in and out.</p>
    <div className="container-3dPlot left-side">
      <iframe
        src="/3d-plot.html"
        title="3D Plot"
        width="100%"
        height="100%"
        
        style={{ border: "none" }}
      />
    </div>
    </>
  );
}

export default HtmlComp;
