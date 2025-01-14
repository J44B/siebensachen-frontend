function Checkbox({ isChecked, checkHandler }) {
    return (
        <div className="">
            <input
                type="checkbox"
                className="size-4 rounded border-gray-300 accent-[#173B45]"
                id="Check"
                checked={isChecked}
                onChange={checkHandler}
            />
        </div>
    );
}

export default Checkbox;
