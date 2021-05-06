using Microsoft.EntityFrameworkCore.Migrations;

namespace terceira.Migrations
{
    public partial class seraofim : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UpdateUserId",
                table: "Crimes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Crimes_UpdateUserId",
                table: "Crimes",
                column: "UpdateUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Crimes_Users_UpdateUserId",
                table: "Crimes",
                column: "UpdateUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Crimes_Users_UpdateUserId",
                table: "Crimes");

            migrationBuilder.DropIndex(
                name: "IX_Crimes_UpdateUserId",
                table: "Crimes");

            migrationBuilder.DropColumn(
                name: "UpdateUserId",
                table: "Crimes");
        }
    }
}
