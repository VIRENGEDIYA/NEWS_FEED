const Dropdown = ( props ) => {
    return (
        <Picker
            mode="dropdown"
            androidHeader="Select your SIM"
            placeholder="Select the country"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            style={{ width:"100%" }}
            selectedValue={""}
            // onValueChange={this.onValueChange.bind(this)}
            >
            
            {Countries.map((item,index ) => {
                return <Picker.Item label={item.Name} value={item.Code} />
            })}
            
            {/* <Picker.Item label="Country" value="Country" /> */}
        </Picker>
    )
}