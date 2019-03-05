/**
 * Fill a target element with an image promoting success.
 * 
 * To use, create a new instance of SuccessDisplay then call .showImage()
 * var success = new SuccessDisplay( 'your_element_id' );
 * success.showImage();
 * 
 * @target_id the ID of the element to add the success image to
 */
function SuccessDisplay( target_id ) {
    var self = this;
    self.target = document.getElementById( target_id );
    
    self.arr_images = [
        'https://media.giphy.com/media/4xpB3eE00FfBm/giphy.gif',
        'https://media.giphy.com/media/xNBcChLQt7s9a/giphy.gif',
        'https://media.giphy.com/media/37nRXpCEP9H1f1WVrb/giphy.gif',
        'https://media.giphy.com/media/1dagNhv8Oqu6l8U3ZK/giphy.gif',
        'https://media.giphy.com/media/Zu6AATBpCeUzm/giphy.gif'
    ];

    self.showImage = function() {

        try {

            // get image at random from array
            var max_index = self.arr_images.length;
            var random_index = Math.floor(Math.random() * max_index);

            // create image element
            var image_elem = new Image();
            image_elem.src = self.arr_images[ random_index ];

            // clear any text and append image to target element
            self.target.innerHTML = '';
            self.target.appendChild(image_elem);

        } catch( e ) {
            // catch all errors
            console.error( e );
            self.target.innerHTML = 'Failed to display image';
        }
    }
}
