using System.ComponentModel.DataAnnotations;

namespace CarRentApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(25, MinimumLength=6, ErrorMessage = "Your password should be between 6 and 25 characters.")]
        public string Password { get; set; }
    }
}