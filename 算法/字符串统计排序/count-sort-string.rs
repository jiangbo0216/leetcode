use std::io::{self, BufRead};

fn main() {
    let stdin = io::stdin();
    let vec: Vec<String> = stdin.lock().lines()
        .next().unwrap().unwrap()
        .split_whitespace()
        .map(|s| s.to_string())
        .collect();

    let mut arr = vec![];
    for i in &vec {
        let mut l: Vec<char> = i.chars().collect();
        l.sort();
        let tmp: String = l.into_iter().collect();
        arr.push(tmp);
    }

    let mut map = std::collections::HashMap::<String, i32>::new();
    let mut hi = 0;
    for i in &arr {
        let count = map.entry(i.to_string()).or_insert(0);
        *count += 1;
        hi = hi.max(*count);
    }

    for i in (1..=hi).rev() {
        let mut mat = vec![];
        for (k, v) in &map {
            if *v == i {
                mat.push(k.clone());
            }
        }
        mat.sort_by(|a, b| {
            if a.len() != b.len() {
                return a.len().cmp(&b.len());
            }
            return a.cmp(b);
        });
        for w in mat {
            for _ in 0..i {
                print!("{} ", w);
            }
        }
    }
}