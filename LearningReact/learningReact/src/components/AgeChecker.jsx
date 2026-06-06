export function AgeChecker({ age }) {
    return (
        <>
            <div>
                {age >= 18 ? (
                    <p>You are eligible to vote.</p>
                ) : (
                    <p>Go to hell u minor !</p>
                )}
            </div>
        </>
    )
}