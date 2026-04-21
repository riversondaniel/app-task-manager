using AppTaskManager.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace AppTaskManager.Api.Data
{
    public class TaskDbContext : DbContext
    {
        public TaskDbContext(DbContextOptions<TaskDbContext> options)
            : base(options)
        {
        }

        public DbSet<TaskItem> Tasks => Set<TaskItem>();
    }
}