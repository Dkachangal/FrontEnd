function ConditionalRendering({ num }) {
    const count = num;
    return (
        <>
            <div>
                <h1>Conditional Rendering</h1>
                {count > 0 ? (
                    <h3>Count is Positive</h3>
                ):(
                    <h3>Count is Negative</h3>
                )}
            </div>
        </>
    )
}
export default ConditionalRendering