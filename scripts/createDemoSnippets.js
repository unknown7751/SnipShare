"use server";

import { db } from "@/lib/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const demoSnippets = [
  {
    id: "tFOrJEARI2SbxKQR92PF", // This matches the existing demo link
    title: "Welcome to SnipShare! 🚀",
    desc: "A simple JavaScript example to get you started with SnipShare. Try running this code to see the magic happen!",
    language: "javascript",
    code: `// Welcome to SnipShare! 🚀
// This is a simple JavaScript example to showcase our platform

console.log("Hello from SnipShare! 👋");
console.log("This code runs in real-time using our secure execution environment.");

// Let's do some fun calculations
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log("\\n📊 Number Analysis:");
console.log("Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);

// Let's create a simple function
function greetUser(name) {
    return \`Hello, \${name}! Welcome to SnipShare! 🌟\`;
}

console.log("\\n👋 Greeting:");
console.log(greetUser("Developer"));

console.log("\\n✨ Ready to share your own code snippets?");
console.log("Sign up and start creating amazing snippets! 🎉");`,
    author: "demo"
  },
  {
    id: "pythonDemo123",
    title: "Python Data Analysis Example 📈",
    desc: "A Python snippet demonstrating data manipulation and visualization concepts.",
    language: "python",
    code: `# Python Data Analysis Example 📈
# This snippet shows how to work with data in Python

import random

print("🐍 Welcome to Python on SnipShare!")
print("Let's analyze some sample data\\n")

# Generate sample data
data = [random.randint(1, 100) for _ in range(10)]
print(f"Sample data: {data}")

# Calculate statistics
total = sum(data)
average = total / len(data)
maximum = max(data)
minimum = min(data)

print(f"\\n📊 Statistics:")
print(f"Total: {total}")
print(f"Average: {average:.2f}")
print(f"Maximum: {maximum}")
print(f"Minimum: {minimum}")

# Find even and odd numbers
even_numbers = [x for x in data if x % 2 == 0]
odd_numbers = [x for x in data if x % 2 != 0]

print(f"\\n🔢 Number Analysis:")
print(f"Even numbers: {even_numbers}")
print(f"Odd numbers: {odd_numbers}")

# Simple sorting
sorted_data = sorted(data)
print(f"\\n📈 Sorted data: {sorted_data}")

print("\\n✨ Python is powerful for data analysis!")
print("Try creating your own Python snippets! 🚀")`,
    author: "demo"
  },
  {
    id: "javaDemo456",
    title: "Java Object-Oriented Programming 🏗️",
    desc: "A Java example showcasing OOP concepts with classes and inheritance.",
    language: "java",
    code: `// Java Object-Oriented Programming Example 🏗️
// This snippet demonstrates OOP concepts in Java

public class Main {
    public static void main(String[] args) {
        System.out.println("☕ Welcome to Java on SnipShare!");
        System.out.println("Let's explore Object-Oriented Programming\\n");
        
        // Create some shapes
        Shape circle = new Circle(5.0);
        Shape rectangle = new Rectangle(4.0, 6.0);
        
        // Display information
        System.out.println("📐 Shape Information:");
        System.out.println(circle.getInfo());
        System.out.println(rectangle.getInfo());
        
        // Calculate areas
        System.out.println("\\n📊 Area Calculations:");
        System.out.println("Circle area: " + circle.calculateArea());
        System.out.println("Rectangle area: " + rectangle.calculateArea());
        
        System.out.println("\\n✨ Java is excellent for building robust applications!");
        System.out.println("Start coding in Java today! 🚀");
    }
}

// Abstract base class
abstract class Shape {
    protected String name;
    
    public Shape(String name) {
        this.name = name;
    }
    
    public abstract double calculateArea();
    
    public String getInfo() {
        return name + " - Area: " + calculateArea();
    }
}

// Circle class
class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        super("Circle");
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

// Rectangle class
class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double calculateArea() {
        return width * height;
    }
}`,
    author: "demo"
  },
  {
    id: "cppDemo789",
    title: "C++ Algorithm Implementation ⚡",
    desc: "A C++ snippet demonstrating algorithm implementation and performance.",
    language: "cpp",
    code: `// C++ Algorithm Implementation Example ⚡
// This snippet shows efficient C++ programming

#include <iostream>
#include <vector>
#include <algorithm>
#include <string>

using namespace std;

// Function to demonstrate sorting and searching
void demonstrateAlgorithms() {
    cout << "⚡ Welcome to C++ on SnipShare!" << endl;
    cout << "Let's explore some algorithms\\n" << endl;
    
    // Create a vector of numbers
    vector<int> numbers = {64, 34, 25, 12, 22, 11, 90};
    cout << "Original array: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Sort the array
    sort(numbers.begin(), numbers.end());
    cout << "Sorted array: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Binary search
    int searchValue = 25;
    bool found = binary_search(numbers.begin(), numbers.end(), searchValue);
    cout << "\\n🔍 Searching for " << searchValue << ": ";
    cout << (found ? "Found! ✅" : "Not found ❌") << endl;
    
    // Find min and max
    auto minElement = min_element(numbers.begin(), numbers.end());
    auto maxElement = max_element(numbers.begin(), numbers.end());
    cout << "Minimum: " << *minElement << endl;
    cout << "Maximum: " << *maxElement << endl;
    
    // Calculate sum
    int sum = 0;
    for (int num : numbers) {
        sum += num;
    }
    cout << "Sum: " << sum << endl;
    cout << "Average: " << (double)sum / numbers.size() << endl;
}

// Main function
int main() {
    demonstrateAlgorithms();
    
    cout << "\\n✨ C++ is perfect for high-performance applications!" << endl;
    cout << "Start building efficient code with C++! 🚀" << endl;
    
    return 0;
}`,
    author: "demo"
  }
];

export async function createDemoSnippets() {
  const snippetsCollectionRef = collection(db, 'snippets');

  try {
    for (const snippet of demoSnippets) {
      // Use setDoc to create with specific ID
      await setDoc(doc(db, 'snippets', snippet.id), {
        author: snippet.author,
        title: snippet.title,
        desc: snippet.desc,
        language: snippet.language,
        code: snippet.code,
        createdAt: new Date().toISOString()
      });
      console.log(`Demo snippet created with ID: ${snippet.id}`);
    }
    console.log('All demo snippets created successfully!');
  } catch (error) {
    console.error('Error creating demo snippets:', error);
    throw error;
  }
}

// Function to create a single demo snippet
export async function createSingleDemoSnippet(snippetData) {
  const snippetsCollectionRef = collection(db, 'snippets');

  try {
    const newSnippetRef = await addDoc(snippetsCollectionRef, {
      ...snippetData,
      createdAt: new Date().toISOString()
    });
    console.log('Demo snippet created with ID:', newSnippetRef.id);
    return newSnippetRef.id;
  } catch (error) {
    console.error('Error adding demo snippet:', error);
    throw error;
  }
} 