
function Stats() {
  return (
    <div>
        <h1 className="text-primary-text font-primary text-3xl">Today</h1>
        <div className="grid grid-cols-2 grid-rows-2 border w-170 gap-4">
            <div className="flex flex-col justify-center bg-primary px-6 h-45 text-primary-text font-primary font-light rounded-md">
                <h1 className="text-xl leading-12">Accuracy</h1>
                <span className="text-5xl font-normal">79%</span>
                <span>Average: 90%</span>
            </div>
            <div className="flex flex-col justify-center bg-primary px-6 h-45 text-primary-text font-primary font-light rounded-md">
                <h1 className="text-xl leading-12">Streak</h1>
                <span><span className="text-5xl font-normal">26</span> days</span>
                <span>x hours left</span>
            </div>
            <div className="flex flex-col justify-center bg-primary px-6 h-45 text-primary-text font-primary font-light rounded-md">
                <h1 className="text-xl leading-12">Due</h1>
                <span><span className="text-5xl font-normal">17</span> cards</span>
                <span>x hours left</span>
            </div>
            <div className="flex flex-col justify-center bg-primary px-6 h-45 text-primary-text font-primary font-light rounded-md">
                Widget 4
            </div>
        </div>
    </div>
  )
}

export default Stats